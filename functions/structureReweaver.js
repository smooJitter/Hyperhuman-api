export const structureReweaver = async (dryText, format) => {
    const samples = {
      narrative: `Let me tell you a quick story: ${dryText}`,
      tutorial: `Here's how it works. Step by step: ${dryText}`,
      dialogue: `User: I don't get it.\nGuide: Sure! ${dryText}`,
      scenario: `Imagine this: ${dryText}`,
      monologue: `I've thought a lot about this... ${dryText}`
    };
    return samples[format] || dryText;
  };