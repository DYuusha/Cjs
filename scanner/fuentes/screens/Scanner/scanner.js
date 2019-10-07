var codigo = `Begin
#este es un comentario
int i=2;
bool = true;
string s = "hola";
a = cjread();
if(i<=20){ 
}
End`

var ch = ' ';
var i = -1;
var source = codigo;
var lexeme;

var tokens = new Array();

function scan() {
    initializeSpecialSymbols();
    this.source = source.toLowerCase();
    var sourceSize = source.length;
    while (i<sourceSize){
        getToken();
        
    }
    alert(tokens.map(function(token) {
        return `${token.value} -> ${token.type}`;
    }));
}

function getToken(){
    var token = new Token();
    lexeme = '';
    var j = 0;
    var index;

    while (ch==' ' || ch=='\n' || ch=='\t') {
        advance() ;
    }
    if(isLetter(ch) || ch == '_'){
        lexeme += ch;
        j = 1;
        advance();
        while ( isLetter( ch ) ||  isDigit(ch)  || ch == '_' ) 
        if(j < MAX_LINE){
            lexeme += ch;
            advance();
        }
        index = binarySearchResWord(resWordLex, lexeme);
        if(index >= 0){
            token.reservedWord(index);
        } else {
            token.ident(lexeme);
        }
    } else if(isDigit(ch)){
        isFloat = false;
        lexeme = ch;
        j = 1;
        advance();
        while(isDigit(ch) || ch == '.'){
            if(j < MAX_DIGIT) lexeme += ch;
            if (ch == '.') isFloat = true;
            j++;
            advance();
        }
        
        if(isFloat){
            token.float(lexeme);
        } else {
            token.integer(lexeme);
        }
    } else if (ch == '"'){
        lexeme = '';
        advance();
        while (ch != '"'){
            lexeme += ch;
            advance();
        }
        token.string(lexeme);
        advance();

    } else if(ch == '#'){
        advance();
        while(ch !='\n')
            advance()
        advance();
        return;
    } else {
        if(ch == '<'){
            advance();
            if(ch == '='){
                token.other(Type.LESSEQ, '<=');
                advance();
            } else {
                token.specialSymbol('<');
            }
        } else if(ch == '>'){
            advance();
            if(ch == '='){
                token.other(Type.GREATEQ, '>=');
                advance();
            } else {
                token.specialSymbol('>');
            }
        }else if(ch == '='){
            advance();
            if(ch == '='){
                token.other(Type.EQUAL, '==');
                advance();
            } else {
                token.specialSymbol('=');
            }
        } else if(ch == '|'){
                advance();
                if(ch == '|'){
                    token.other(Type.TOKOR, '||');
                    advance();
                }
        } else if(ch == '&'){
            advance();
            if(ch == '&'){
                token.other(Type.TOKAND, '&&');
                advance();
            }
        }
        else {
            token.specialSymbol(ch);
            advance()
        }
    }
    console.log(token.str());
    tokens.push(token);
}

function advance(){
    ++i;
    ch = source[i];
}

function isLetter(c){
    
    if(!(typeof c == 'string')) return false;
    var code = c.charCodeAt(0);
    return (code > 96 && code < 123);
}

function isDigit(c){
    if(!(typeof c == 'string')) return false;
    code = c.charCodeAt(0);
    return (code > 47 && code < 58);
}
