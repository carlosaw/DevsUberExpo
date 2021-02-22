export default () => ({
  login: (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let json = {
          error: '',
          token: '123456789',
          name: 'Rodinei Developer',
        };

        resolve(json);
      }, 1000);
    });
  },
  register: (name, email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let json = {
          error: '',
        };

        if (email === 'invalid@teste.com') {
          json.error = 'Este e-mail já está em uso!';
        } else {
          json.token = '123456789';
        }

        resolve(json);
      }, 1000);
    });
  },
  getPrice: (distance) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let json = {
          error: '',
        };

        json.price = distance * 7;

        resolve(json);
      }, 1000);
    });
  },
  findDriver: (options) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let json = {
          error: '',
        };

        json.driver = {
          id: new Date().getTime(),
          name: 'Rodinei Developer',
          avatar:
            'https://www.gravatar.com/avatar/3fefcffd132a31977368a615b12e60a7?s=120',
          stars: 5,
          carName: 'Renault',
          carColor: 'Vermelho',
          carPlate: 'XYZ-0000',
        };

        resolve(json);
      }, 3000);
    });
  },
  setRating: (rating) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let json = {
          error: '',
        };

        resolve(json);
      }, 1000);
    });
  },
});
