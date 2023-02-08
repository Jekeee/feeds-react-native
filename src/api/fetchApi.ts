export const fetchFeed = (
  page: number,
): Promise<{data: {id: string; download_url: string; author: string}}> => {
  const feedURL = `https://picsum.photos/v2/list?page=${page}&limit=10`;
  return fetch(feedURL).then(data => data.json());
};

export const fetchProfile = (): Promise<{
  data: {avatar: string; first_name: string; last_name: string; email: string};
}> => {
  const profileURL = 'https://reqres.in/api/users/1';
  return fetch(profileURL).then(data => data.json());
};
