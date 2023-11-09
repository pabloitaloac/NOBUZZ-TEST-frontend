export const login = (userData) => {
    console.log('inside login');
    return {
      type: 'login',
      payload: userData,
    };
};
  

export const logout = (userData) => {
    return {
      type: 'logout',
      payload: userData,
    };
};
  


export const currentUser = (userData) => {
    return {
      type: 'getUserData',
      payload: userData,
    };
};
  

