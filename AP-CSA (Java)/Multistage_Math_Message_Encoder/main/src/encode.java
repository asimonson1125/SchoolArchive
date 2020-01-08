public class encode {
    int encodeLetter(int previous, int charNum, String letter){
        int multiplier = (charNum % 10) + 1;
        return(multiplierList(letter)*previous*multiplier);
    }

    int multiplierList (String letter){
        switch(letter){
            case "a": return(42);
            case "b": return(7);
            case "c": return(10);
            case "d": return(6);
            case "e": return(26);
            case "f": return(23);
            case "g": return(19);
            case "h": return(31);
            case "i": return(11);
            case "j": return(2);
            case "k": return(41);
            case "l": return(36);
            case "m": return(1);
            case "n": return(17);
            case "o": return(38);
            case "p": return(29);
            case "q": return(25);
            case "r": return(40);
            case "s": return(8);
            case "t": return(35);
            case "u": return(12);
            case "v": return(22);
            case "w": return(44);
            case "x": return(33);
            case "y": return(16);
            case "z": return(3);
            case "1": return(27);
            case "2": return(34);
            case "3": return(45);
            case "4": return(9);
            case "5": return(21);
            case "6": return(30);
            case "7": return(4);
            case "8": return(37);
            case "9": return(24);
            case "0": return(15);
            case " ": return(14);
            default: return(0);
        }
    }
}
