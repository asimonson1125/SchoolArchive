public class decode {
    String decodeNumber(int previousNum, int charNum, int currentNum) {
        int divide = (charNum % 10) + 1;
        int num = currentNum/divide/previousNum;
        return(quotientList(Integer.toString(num)));
    }

    String quotientList(String numerator) {
        switch (numerator) {
            case "42":
                return ("a");
            case "7":
                return ("b");
            case "10":
                return ("c");
            case "6":
                return ("d");
            case "26":
                return ("e");
            case "23":
                return ("f");
            case "19":
                return ("g");
            case "31":
                return ("h");
            case "11":
                return ("i");
            case "2":
                return ("j");
            case "41":
                return ("k");
            case "36":
                return ("l");
            case "1":
                return ("m");
            case "17":
                return ("n");
            case "38":
                return ("o");
            case "29":
                return ("p");
            case "25":
                return ("q");
            case "40":
                return ("r");
            case "8":
                return ("s");
            case "35":
                return ("t");
            case "12":
                return ("u");
            case "22":
                return ("v");
            case "44":
                return ("w");
            case "33":
                return ("x");
            case "16":
                return ("y");
            case "3":
                return ("z");
            case "27":
                return ("1");
            case "34":
                return ("2");
            case "45":
                return ("3");
            case "9":
                return ("4");
            case "21":
                return ("5");
            case "30":
                return ("6");
            case "4":
                return ("7");
            case "37":
                return ("8");
            case "24":
                return ("9");
            case "15":
                return ("0");
            case "14":
                return (" ");
            default:
                return ("ERR");
        }
    }
}