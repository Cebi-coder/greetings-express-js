module.exports = function Greetings() {

    var greetObj = {}

    function countGreetings() {

        var greetCount = 0;
        for (var i in greetObj) {

            if (greetObj.length(i)) {

                greetObj++
            }
        }

        return greetCount

    }

    function nameCount() {

        if (greetObj === undefined) {

            greetObj = 0;
        }
        if (greetObj === 1) {

        }
        else {

            greetObj += 1
        }

    }

    function greetUser(name, language) {

        if (language === "English") {

            return "Hello" + name
        }

        if (language === "isiZulu") {

            return "Sawubona" + name
        }

        if (language === "isiXhosa") {

            return "Molo" + name
        }
    }
    return {
        
        countGreetings,
        nameCount,
        greetUser,
    }
}
