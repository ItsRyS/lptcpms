import argon2 from 'argon2';
console.log(await argon2.hash('123456', {
  type: argon2.argon2id,
  memoryCost: 65536,
  timeCost: 3,
  parallelism: 4
}));
