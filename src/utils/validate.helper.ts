export const validateLogin = (
    data: any
  ): data is { email: string; password: string } => {
    return (
      data.email &&
      data.password &&
      typeof data.email === "string" &&
      typeof data.password === "string"
    );
  };
  
  export const validateRegsitration = (
    data: any
  ): data is { email: string; password: string, name: string } => {
    return (
      data.email &&
      data.password &&
      typeof data.name === "string" &&
      typeof data.email === "string" &&
      typeof data.password === "string"
    );
  };