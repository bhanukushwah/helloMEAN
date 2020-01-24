var About = require('./model/contacts');

module.exports = function (expobj) {
    
    expobj.post('/api/abouts', (req, res) => {
       
        console.log("First Name: " + req.body.first_name + "Contact Number: " + req.body.phone);

        let newContact = new About({
            first_name: req.body.first_name,
            phone: req.body.phone
        });

        newContact.save(function (err, contact) {
            if (err) {
                res.json({
                    msg: 'Failed to add Contact'
                });
            } else {
                res.json({
                    msg: 'Contact added Successfully'
                });
            }

        });
    });
};