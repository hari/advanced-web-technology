const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Here, we inject the EndScreen.vue component into the slides and run builds in parallel.

// Use dynamic import for p-limit (ESM module)
let pLimit;
(async () => {
  const pLimitModule = await import('p-limit');
  pLimit = pLimitModule.default;

  const slidevPath = path.resolve(
    __dirname,
    '../slides/node_modules/.bin/slidev'
  );
  const inputDir = path.join(__dirname, '../slides/chapters');
  const outputDir = path.join(__dirname, '../dist/slides');
  const tmpDir = path.resolve(__dirname, '../slides/.temp');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir, { recursive: true });
  }

  const endScreenSlide = `
---
layout: center
---

<script setup>
import EndScreen from '../components/EndScreen.vue'
</script>

<EndScreen />
`;

  const files = fs.readdirSync(inputDir).filter((f) => f.endsWith('.md'));

  const slideConfig = JSON.stringify(
    files.map((file) => {
      const [day, index, ...name] = file.split('-');
      return {
        day,
        index,
        title: name.join(' ').replaceAll('.md', ''),
        slug: file.replace('.md', ''),
      };
    })
  );

  fs.writeFileSync(
    path.join(__dirname, '../slides/slides.config.js'),
    `export const slideChapters = ${slideConfig};`
  );

  async function buildSlide(file) {
    const name = path.basename(file, '.md');
    const inputPath = path.join(inputDir, file);
    const tmpPath = path.join(tmpDir, `${name}.temp.md`);
    const outPath = path.join(outputDir, name);
    const basePath = `/slides/${name}/`;

    const originalContent = fs.readFileSync(inputPath, 'utf-8');
    const enhancedContent = `${originalContent.trim()}\n\n${endScreenSlide}`;
    fs.writeFileSync(tmpPath, enhancedContent);

    console.log(`🔧 Building ${name}...`);

    const command = `${slidevPath} build "${tmpPath}" --out "${outPath}" --base "${basePath}"`;
    return new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`❌ Error building ${name}:`, error);
          console.error(stderr);
          reject(error);
        } else {
          console.log(`✅ Built ${name} → ${outPath}`);
          resolve();
        }
      });
    });
  }

  const limit = pLimit(4);

  function createSlidesIndex() {
    const outDir = path.resolve(__dirname, '../dist/slides');
    let template = fs.readFileSync(
      path.join(__dirname, 'template.html'),
      'utf-8'
    );
    const variables = [{ key: 'title', value: 'AWT Slides' }];
    for (const variable of variables) {
      template = template.replaceAll(`{{${variable.key}}}`, variable.value);
    }
    fs.writeFileSync(
      path.join(outDir, 'index.html'),
      template.replace('const items = [];', `const items = ${slideConfig};`)
    );
  }

  function createProjectsIndex() {
    const outDir = path.resolve(__dirname, '../dist/projects');
    let template = fs.readFileSync(
      path.join(__dirname, 'template.html'),
      'utf-8'
    );
    const variables = [{ key: 'title', value: 'AWT Projects' }];
    for (const variable of variables) {
      template = template.replaceAll(`{{${variable.key}}}`, variable.value);
    }

    const projectItems = JSON.stringify(
      fs
        .readdirSync(path.resolve(__dirname, '../frontend'))
        .map((item, index) => {
          return {
            day: '',
            index: `#${index + 1}`,
            title: item,
            slug: item,
            href: `/projects/${item}`,
          };
        })
    );

    fs.writeFileSync(
      path.join(outDir, 'index.html'),
      template.replace('const items = [];', `const items = ${projectItems};`)
    );
  }

  Promise.all(files.map((file) => limit(() => buildSlide(file)))).then(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true });

    createSlidesIndex();
    createProjectsIndex();
    fs.copyFileSync(
      path.join(__dirname, './index.html'),
      path.join(__dirname, '../dist/index.html')
    );
    console.log('🎉 All slides built successfully.');
  });
})();
