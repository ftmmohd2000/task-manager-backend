const { connect } = require("mongoose");

connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});
