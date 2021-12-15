//Models
const Profile = require("../models/Profile");
const User = require("../models/User");

module.exports = {
  //create or update profile
    addProfile: async (req, res) => {
      const {
        country, state, city,bio,status,mobile,
        skills, youtube,facebook, twitter,instagram,linkedin
    } = req.body;
    
    //build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if(country) profileFields.country = country;
    if(state) profileFields.state = state;
    if(city) profileFields.city = city;
    if(bio) profileFields.bio = bio;
    if(status) profileFields.status = status;
    if(mobile) profileFields.mobile = mobile;
    if(skills) {
        profileFields.skills = skills.split(',').map(skill => skill.trim())
    }
    
    //build social object
    profileFields.social = {}
    if(youtube) profileFields.social.youtube = youtube;
    if(twitter) profileFields.social.twitter = twitter;
    if(facebook) profileFields.social.facebook = facebook;
    if(linkedin) profileFields.social.linkedin = linkedin;
    if(instagram) profileFields.social.instagram = instagram;
    
    try {
        let profile = await Profile.findOne({ user : req.user.id})
        if(profile) {
            //update
            profile = await Profile.findOneAndUpdate(
                {user : req.user.id},
                {$set: profileFields},
                {new: true,upsert: true}
            );
            return res.json(profile);
        }
    
    
            //create if not found profile
             profile = new Profile(profileFields);
    
             await profile.save();
             res.json(profile)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('server Error')
    }
    
    },
    //update educations
    addEducation: async (req, res) => {
      const { 
        school,degree,fieldofstudy,from,to,current,description
    } = req.body;
    
    const newEdu = {
        school,degree,fieldofstudy,from,to,current,description
    }
     try {
         const profile = await Profile.findOne({user:req.user.id});
    
         profile.education.unshift(newEdu)
             await profile.save()
             res.json(profile)     
     } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error') 
     }
    
    },
    //update work experiences
    addWorkExeperience: async (req, res) => {
      const { 
        title, company,location,from,to,current,description
    } = req.body;
    
    const newExp = {
        title, company,location,from,to,current,description
    }
     try {
         const profile = await Profile.findOne({user:req.user.id});
    
         profile.workExperience.unshift(newExp)
             await profile.save()
             res.json(profile)     
     } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error') 
     }
    
    },
    //update voluntere experienec
    addVolunteerExperience: async (req, res) => {
      const { 
        title, company,location,from,to,current,description
    } = req.body;
    
    const newVolExp= {
        title, company,location,from,to,current,description
    }
     try {
         const profile = await Profile.findOne({user:req.user.id});
    
         profile.volunteerExperience.unshift(newVolExp)
             await profile.save()
             res.json(profile)     
     } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error') 
     }
    
    },
       //delete education
       deleteEducation: async (req, res) => {
        try {
          const foundProfile = await Profile.findOne({ user: req.user.id });
          //filter all edus expect requested one then save it to dashboard
          foundProfile.education = foundProfile.education.filter(
            (edu) => edu._id.toString() !== req.params.edu_id
          );
          await foundProfile.save();
          return res.status(200).json(foundProfile);
        } catch (error) {
          console.error(error);
          return res.status(500).json({ msg: 'Server error' });
        }
      
      },
          //delete volunetere experience
          deleteVoluntere: async (req, res) => {
            try {
              const foundProfile = await Profile.findOne({ user: req.user.id });
              foundProfile.volunteerExperience = foundProfile.volunteerExperience.filter(
                (volExp) => volExp._id.toString() !== req.params.volExp_id
              );
              await foundProfile.save();
              return res.status(200).json(foundProfile);
            } catch (error) {
              console.error(error);
              return res.status(500).json({ msg: 'Server error' });
            }
          
          },

        //delete work experience
        deleteWorkExperience: async (req, res) => {
          try {
            const foundProfile = await Profile.findOne({ user: req.user.id });
            foundProfile.workExperience = foundProfile.workExperience.filter(
              (exp) => exp._id.toString() !== req.params.exp_id
            );
            await foundProfile.save();
            return res.status(200).json(foundProfile);
          } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Server error' });
          }
        
        },    



        //edit education
        editEducation: async (req, res) => {
          try {
            const foundProfile = await Profile.findOne({ user: req.user.id });
           //edit values
           
            let obj = foundProfile.education.find(edu => edu._id === req.params.id);
            await foundProfile.save();
            return res.status(200).json(foundProfile);
          } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Server error' });
          }
        
        },

        //edit work experiences


        //edit voluntere experiences
}