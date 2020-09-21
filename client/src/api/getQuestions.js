export const getQuestions = async () => {
  const response = await fetch("http://localhost:3000/numberquestions");
  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  console.log(result);
  return result;
};
