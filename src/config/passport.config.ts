import passport from "passport";
import passportLocalStrategy from "passport-local"
import bcrypt from "bcrypt"
import { User } from "../models/User";

//initialize variables
const LocalStrategy = passportLocalStrategy.Strategy;
passport.use(new LocalStrategy(
  async function (username, password, done) {
    try {
      const user = await User.findOne({ where: { username: username } })
      //confirm user existence
      if (!user) { return done(null, false, { message: 'Incorrect username.' }) }
      //compare password if user exists
      const isCorrectPassword = await bcrypt.compare(password, user.password);
      if (!isCorrectPassword) { return done(null, false, { message: 'Incorrect password.' }) }
      //if no errors return the matched user
      return done(null, user);
    } catch (err) {
      return done(err)
    }
  }
))


passport.serializeUser(function (user: { user_id: string }, done) {
  done(null, user.user_id);
});

// passport.deserializeUser(function (user_id, done) {
//   User.findByPk(user_id).then(function (user: boolean | Express.User) { done(null, user); });
// });



