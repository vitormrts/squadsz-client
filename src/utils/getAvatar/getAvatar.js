const getAvatar = (name = '') => {
  const avatar = name.replace(/\s/g, '-').toLowerCase();
  return `https://avatars.dicebear.com/api/initials/${avatar}.svg`;
};

export default getAvatar;
