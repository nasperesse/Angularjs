/**
 * Created by Angel on 10.10.17.
 */

var jason = function () {

         return             [{Name:"Modjo", Alter:24, Sex:"M",Adresse:"Maxistr",Email:"ange@gff.fe"},
             {Name:"Marie", Alter:45, Sex:"F",Adresse:"sable",Email:"marie@gff.fe"},
             {Name:"Djoko", Alter:34, Sex:"M",Adresse:"ngousso",Email:"jaures@gff.fe"},
             {Name:"Djouguela", Alter:5, Sex:"M",Adresse:"bakandi",Email:"carlos@gff.fe"}
         ];


};


var Model = function (jason) {


    return {

        getName: function (i) {
               return jason[i].Name
        },
        getAlter: function (i) {
            return jason[i].Alter

        },
        getSex: function (i) {
            return jason[i].Sex;

        },
        getAdresse: function (i) {
            return jason[i].Adresse;

        },
        getEmail: function (i) {
            return jason[i].Email;

        },

        addPerson: function(name, alter, sex, Adresse, email) {

            person = {Name:name, Alter:alter, Sex:sex, Adresse:adresse, Email:email};

            jason.push(person);
    },

        getJason: function () {

            return jason;

        }




    }
};






var model = angular.module('app.model',[])

.factory("Model", Model)
.service("jason", jason);