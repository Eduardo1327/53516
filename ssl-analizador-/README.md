# Analizador de Lógica
Nombre: Eduardo Suarez.
Legajo: 53516
Tema: 25914\_15  
Tecnología: Node.js  
Gramática: Fórmulas de lógica en notación EBNF

---

## Estructura del proyecto

```
logic-analyzer/
├── Logic.g4                        # Gramática ANTLR4 (referencia)
├── gramatica.txt                   # Gramática en notación EBNF
├── index.js                        # Punto de entrada principal
├── input.txt                       # Archivo de entrada por defecto
├── package.json
├── generated/
│   ├── LogicLexer.js               # Analizador léxico
│   └── LogicParser.js              # Analizador sintáctico
└── examples/
    ├── input_valido_1.txt           # Ejemplo válido 1
    ├── input_valido_2.txt           # Ejemplo válido 2
    ├── input_invalido_1.txt         # Ejemplo inválido 1
    └── input_invalido_2.txt         # Ejemplo inválido 2
```

---

## Requisitos

- **Node.js** v16 o superior

---

## Instalación

```bash
cd logic-analyzer
npm install
```

---

## Ejecucion

### Opción 1 — Con el archivo `input.txt`

Editar `input.txt` con la fórmula que se quiera analizar y luego ejecutas:

```bash
node index.js
```

### Opción 2 — Con uno de los archivos de ejemplo

**Windows (PowerShell):**
```powershell
Get-Content examples\input_valido_1.txt | node index.js
```

O simplemente copias el contenido del archivo a `input.txt` y ejecutas `node index.js`.

---

## Ejemplos incluidos

| Archivo | Contenido | Resultado |
|---|---|---|
| `input_valido_1.txt` | `(p v q) A -r -> s` | Valido |
| `input_valido_2.txt` | `-(p A q) v (r -> -s)` | Valido |
| `input_invalido_1.txt` | `(p v q A` | Error sintáctico (paréntesis sin cerrar) |
| `input_invalido_2.txt` | `p @ q` | Error léxico (carácter `@` no reconocido) |

---

## Salida del analizador

El programa genera cuatro secciones de salida:

1. Tabla de lexemas y tokens

2. Estado de la entrada

3. Árbol de análisis

4. Interpretación (traducción a JavaScript)


## Operadores del lenguaje

| Símbolo | Operación | Precedencia |
|---|---|---|
| `-` | Negación (unario) | Mayor |
| `A` | Conjunción (AND) | Media |
| `v` | Disyunción (OR) | Media-baja |
| `->` | Implicación | Menor |

---

## Notas

- La letra `A` sola siempre es el operador de conjunción.  
  Para usar una variable que empiece con A, usá al menos 2 caracteres: `A1`, `Ab`, etc.
- La letra `v` sola siempre es el operador de disyunción.  
  Para usar una variable que empiece con v, usá al menos 2 caracteres: `v1`, `var`, etc.
- La implicación `->` es asociativa a la derecha: `p -> q -> r` se interpreta como `p -> (q -> r)`.
- Bash hace referencia a la terminal del VSC
