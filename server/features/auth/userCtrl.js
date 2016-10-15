import User from './User'

export default {
  findOneUser(req, res, next){
    User.findOne({googleId:req.user.id}, (err, user)=>{
      if (err) return res.status(500).json(err);
      if (user) return res.status(201).json(user);
      next();
    })
  },
  saveUser(req, res){
    new User({
      googleId: req.user.id,
      displayName: req.user.displayName,
      name: [req.user.name],
      gender: req.user.gender
    }).save( (err, user)=>{
      if (err) return res.status(500).json(err);
      return res.status(201).json(user);
    })
  }
}
