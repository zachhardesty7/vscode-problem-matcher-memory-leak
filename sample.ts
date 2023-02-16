import typescript from "typescript"

const program = typescript.createProgram(["file1.ts", "file2.ts"], {})
const checker = program.getTypeChecker()
