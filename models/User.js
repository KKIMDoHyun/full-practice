const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  gender: {
    type: String,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

// 유저 정보를 저장하기 전에 한다. 이 실행이 다끝나면 유저 정보를 시작한다.
userSchema.pre("save", (next) => {
  // 비밀번호를 암호화 시킨다.
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
