const API_URL = "http://localhost:8080/api";

export const allTodo = async () => {
  try {
    const response = await fetch(`${API_URL}/todo`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const createTodo = async (todo) => {
  const payload = {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  };
  try {
    const response = await fetch(`${API_URL}/todo`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteTodo = async (id) => {
  //  const payload ={
  //         method: 'DELETE',
  //     }
  try {
    const response = await fetch(`${API_URL}/todo/${id}`, { method: "DELETE" });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const update = async (id, state) => {};
