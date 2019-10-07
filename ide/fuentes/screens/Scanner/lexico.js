
//AGREGAR TODOS
const Type = {
    NULL: 'null',
    TOKBEGIN: 'tokBegin', 
    TOKEND: 'tokEnd',

    TOKTINTEGER: 'tokTInteger',
    TOKTSTRING: 'tokTString',
    TOKTBOOL: 'tokTBool',
    TOKTCHAR: 'tokTChar',
    TOKTFLOAT: 'tokTFloat',

    INTEGER: 'integer',
    STRING: 'string',
    BOOL: 'bool',
    CHAR: 'char',
    FLOAT: 'float',
    TOKTRUE: 'tokTrue',
    TOKFALSE: 'tokFalse',
    TOKOR: 'tokOr',
    TOKAND: 'tokAnd',
    TOKIDEN: 'tokIden',
    TOKIF: 'tokIf',
    TOKWHILE: 'tokWhile',
    TOKRETURN: 'tokReturn',

    TOKLPAR: 'tokLPar',
    TOKRPAR: 'tokRPar',
    TOKSEMICOLON: 'tokSemicolon',
    TOKCOMMA: 'tokComma',
    TOKSINQOUTE: 'tokSinQoute',
    TOKDOUQUOTE: 'tokDouQoute',
    TOKLCURL: 'tokLCurl',
    TOKRCURL: 'tokRCurl',
    TOKLBRACKET: 'tokLBracket',
    TOKRBRACKET: 'tokRBracket',

    SUM: 'sum',
    SUB: 'sub',
    MUL: 'mul',
    DIV: 'div',
    POW: 'pow',
    ASSIGN: 'assign',
    LESS: 'less',
    GREAT: 'greater',
    EQUAL: 'equal',
    LESSEQ: 'lessEqual',
    GREATEQ: 'greaterEqual',

}

class Token {
    constructor(){
        this.type = Type.NULL;
        this.value = 'null';
    }

    specialSymbol(c){
        this.type = specialSymbolTok[c.charCodeAt(0)];
        this.value = c;
    }

    reservedWord(id){
        this.type = resWordTok[id];
        this.value = resWordLex[id];
    }

    other(type, value){
        this.type = type;
        this.value = value;
    }

    ident(value){
        this.type = Type.TOKIDEN;
        this.value = value;
    }

    integer(value){
        this.type = Type.INTEGER;
        this.value = value;
    }

    float(value){
        this.type = Type.FLOAT;
        this.value = value;
    }

    string(value){
        this.type = Type.STRING;
        this.value = value;
    }

    str(){
        return `${this.value} -> ${this.type}`;
    }
}


//AGREGAR TODOS
const resWordLex = ["begin", "bool", "char", "end", "false", "float", "if", "int", "return", "string", "true", "while"];
const resWordTok = [Type.TOKBEGIN, Type.TOKTBOOL, Type.TOKTCHAR, Type.TOKEND, Type.TOKFALSE, Type.TOKTFLOAT, Type.TOKIF,
    Type.TOKTINTEGER, Type.TOKRETURN, Type.TOKTSTRING, Type.TOKTRUE, Type.TOKWHILE];
 specialSymbolTok = new Array(128);

function binarySearchResWord(items, value){
    var left = 0, right = items.length - 1, middle = Math.floor((right + left)/2);
 
    while(items[middle] != value && left < right){
 
        if (value < items[middle]){
            right = middle - 1;
        } else if (value > items[middle]){
            left = middle + 1;
        }
        middle = Math.floor((right + left)/2);
    }
 
    return (items[middle] != value) ? -1 : middle;
}

function initializeSpecialSymbols(){
    //console.log(resWordLex.sort());
    for (var i = 0; i < 128; i++) {
        specialSymbolTok[i] = Type.NULL;
    }
    specialSymbolTok[40] = Type.TOKLPAR;
    specialSymbolTok[41] = Type.TOKRPAR;
    specialSymbolTok[42] = Type.MUL;
    specialSymbolTok[43] = Type.SUM;
    specialSymbolTok[44] = Type.TOKCOMMA;
    specialSymbolTok[45] = Type.SUB;
    specialSymbolTok[47] = Type.DIV;
    specialSymbolTok[59] = Type.TOKSEMICOLON;
    specialSymbolTok[60] = Type.LESS;
    specialSymbolTok[61] = Type.ASSIGN;
    specialSymbolTok[62] = Type.GREAT;
    
    specialSymbolTok[91] = Type.TOKLBRACKET;
    specialSymbolTok[93] = Type.TOKRBRACKET;
    specialSymbolTok[94] = Type.POW;
    specialSymbolTok[123] = Type.TOKLCURL;
    specialSymbolTok[125] = Type.TOKRCURL;
}

/*function printToken() {
    initializeSpecialSymbols();
    id = binarySearch(resWordLex,'while');
    token = new Token(specialSymbolTok['+'.charCodeAt(0)], '+');
    alert(token.str());
}*/

