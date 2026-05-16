grammar Logic;

//Parser

prog        : formula EOF ;

formula     : implication ;

implication : disjunction ( IMPLICATION implication )? ;

disjunction : conjunction ( DISJUNCTION conjunction )* ;

conjunction : negation ( CONJUNCTION negation )* ;

negation    : NEGATION negation                         # negationExpr
            | primary                                   # primaryExpr
            ;

primary     : VARIABLE                                  # variableExpr
            | LPAREN formula RPAREN                     # parenExpr
            ;

// Lexemas 

IMPLICATION : '->' ;
NEGATION    : '-' ;
CONJUNCTION : 'A' ;
DISJUNCTION : 'v' ;
LPAREN      : '(' ;
RPAREN      : ')' ;

// Variable: letra seguida de letras o digitos
// 'A' sola = CONJUNCTION; 'v' sola = DISJUNCTION
// Variable debe tener mas de un char si empieza con A o v
VARIABLE    : [b-uw-zA-Z][a-zA-Z0-9]*
            | 'A' [a-zA-Z0-9]+
            | 'v' [a-zA-Z0-9]+
            ;

WS          : [ \t\r\n]+ -> skip ;