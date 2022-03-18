const API_URL = "http://localhost:8080/api";

const showAllPerson = async () => {
  try {
    const response = await fetch(`${API_URL}/person`);
    const persons = await response.json();
    return persons;
  } catch (error) {
    throw new Error(error);
  }
};

export default showAllPerson;

export const createPerson = async (person) => {
  const payload = {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(person),
  };
  try {
    const response = await fetch(`${API_URL}/person`, payload);
    return "200 persona creada";
  } catch (error) {
    throw new Error(error);
  }
};
