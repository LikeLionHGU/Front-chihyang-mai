export const getFeed = async () => {
  const response = await fetch("http://localhost:8080/api/feed", {
    next: { revalidate: 0 },
  });
  return response.json();
};
