/** Codifica rutas con espacios, comas y tildes (p. ej. "MODULO 5, LECCIÓN 1.pdf") para iframes y enlaces. */
export const pdfUrl = (path) => encodeURI(path)
