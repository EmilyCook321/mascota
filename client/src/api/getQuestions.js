export const getQuestions = async () => {
  const response = await fetch("/api/questions");
  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  console.log(result);
  return result;
};
