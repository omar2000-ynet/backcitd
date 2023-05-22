const schemaUser = require('../modeles/useModele');
const schemaPosst = require('../modeles/PostQuestion');
const schemaQuest = require('../modeles/QuestionsCours');
const user = require('../modeles/PostQuestion');

// Enregistrement
module.exports.enregistreQuestion = async(req, res)=>{
    try {
       const {question,cours,reponses,bonneReponse, commentaire} = req.body;
       const quest = await new schemaQuest({
          question:question,
          cours:cours,
          reponses:reponses,
          bonneReponse:bonneReponse,
          commentaire:commentaire
       })
       try {
           const questSave = await quest.save();
           return res.send(questSave);
       } catch (error) {
            return res.send(error)
       }
        
    } catch (error) {
         return res.send(error)
    }
}
module.exports.postquestion = async(req, res)=>{
    try {
         const {message, email,nom} = req.body;
         const post = await new schemaPosst({
            message:message,
            userEmail:email,
            nom:nom,
         })

         try {
              const pos = await post.save()
              return res.send(pos)
         } catch (error) {
              return res.send(error);
         }
    } catch (error) {
         return res.send(error)
    }
}
module.exports.userEnregistrer = async(req, res)=>{
    try {
       const {nom, email, telephone, sexes,password} = req.body;
       const user = await new schemaUser({
          nom:nom,
          email:email,
          telephone:telephone,
          password:password,
          sexe:sexes
       })
       try {
          const users = await user.save();
          return res.send({users});
       } catch (error) {
          return res.send(error)
       }
        
    } catch (error) {
        return res.send(error)
    }
}
//Mise à jours

// Ajouter un commentaire
module.exports.comment = (req, res)=>{
       const id = req.params.id;
       const {commentaire, date} = req.body;
       try {
           schemaQuest.findByIdAndUpdate(
                id,
                {
                    $addToSet:{
                        commentaires:{
                            commentaire:commentaire,
                            dateComment:date
                        }
                    }
                },
                {new:true, upsert:true}
            )
            .then(docs=>{
                res.send(docs)
            })
            .catch(err=>{
                res.send(err);
            })
       } catch (error) {
         return res.send(error)
       }
}

//>Réponses au post

module.exports.reponsesPost = (req, res)=>{
    const id = req.params.id;
    const {reponse, dateReponse} = req.body;
    schemaPosst.findByIdAndUpdate(
        id,
        { 
            $addToSet:{
                reponses:{
                    reponse:reponse,
                    dateReponse:dateReponse
                }
            }
        },
        {new:true, upsert:true}
    )
    .then(docs=>{
        res.send(docs)
    })
    .catch(err=>{
        res.send(err);
    })
}


//Récupération des données
module.exports.questionRecuperation=async(req, res)=>{
      try {
           const data= await schemaQuest.find();
           return res.send(data);
      } catch (error) {
          return res.send(error)
      }
}