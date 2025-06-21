import { useState } from 'react';

function StepOne() {
  const [email, setEmail] = useState('');
  return (
    <form>
      <label>* work email</label>
      <input
        type="email"
        value={email}
        required
        onChange={(event) => setEmail(event.target.value)}
      />
      <button type="submit">Next</button>
    </form>
  );
}

function StepTwo() {
  const [college, setCollege] = useState('');
  return (
    <form>
      <label>* college</label>
      <input
        type="text"
        value={college}
        onChange={(event) => setCollege(event.target.value)}
      />
      <button type="submit">Next</button>
    </form>
  );
}

function StepThree() {
  return (
    <form>
      <label>* address</label>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  return (
    <div
      style={{
        padding: '16px',
        boxSizing: 'border-box',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <div>
        <button style={{ backgroundColor: step >= 1 ? 'green' : 'gray' }}>
          <span>1</span>
        </button>
        <button style={{ backgroundColor: step >= 2 ? 'green' : 'gray' }}>
          <span>2</span>
        </button>
        <button style={{ backgroundColor: step >= 3 ? 'green' : 'gray' }}>
          <span>3</span>
        </button>
      </div>
      <div style={{ display: step === 1 ? 'block' : 'none' }}>
        <StepOne />
      </div>

      <div style={{ display: step === 2 ? 'block' : 'none' }}>
        <StepTwo />
      </div>

      <div style={{ display: step === 3 ? 'block' : 'none' }}>
        <StepThree />
      </div>

      <button
        onClick={() => setStep((currentStep) => Math.max(1, currentStep - 1))}
      >
        Previous
      </button>
      <button
        onClick={() => setStep((currentStep) => Math.min(3, currentStep + 1))}
      >
        Next
      </button>
    </div>
  );
}
