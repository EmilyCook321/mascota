export const getQuestion = async (id) => {
  const response = await fetch("/api/questions/" + id);
  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  console.log(result);
  return result;
};
