export const decodeBase64Id = (base64Id: string): string => {
    const decodedString = atob(base64Id);
    const idParts = decodedString.split(":");
    return idParts[1];
  };