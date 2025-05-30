// Metódo push
let tarefas = ['Estudar JavaScript',
    'Fazer exercícios de matemática', 
    'Lavar a louça', 
    'Comprar mercado', 
    'Ir à academia',
    'Ler um livro', 
    'Fazer revisão para o teste', 
    'Limpar o quarto', 
    'Estudar para concurso', 
    'Organizar o computador'];

console.log(`Antes do push ${tarefas}`);

// Adicionado dois novos elementos no array
tarefas.push (`Fazer exercícios de português`, `Corrida`);

console.log(`Depois do push: ${tarefas}`);


//Metódo pop
console.log(`Antes do pop: ${tarefas}`);

// Removendo o último elemento do array 

let tarefaRemovida = tarefas.pop();

console.log(`Depois do pop: ${tarefas}`);
console.log(`Tarefa removida: ${tarefaRemovida} `);

// Metódo unshift 

console.log(`Antes do unshift: ${tarefas}`);

//Adicionado uma novo elemento no ínicio do Array
tarefas.unshift(`Inscrição para ENEM`);

console.log(`Depois do unshift: ${tarefas}`);

// Metódo shift 

console.log(`Antes do shif: ${tarefas}`);

// Removendo o priemiro elemento do array
let PrimeiraTarefaRemovida = tarefas.shift();

console.log(`Depois do shift: ${PrimeiraTarefaRemovida}`);

// Metódo includes 

//Verificando se o array possui um determinado elemento
console.log(`As tarefas incluem Ir à academia? ${tarefas.includes(`Ir à academia`)}`);


// Metódo join 

// Convertendo o array em uma string 
console.log(`Tarefas como string: ${tarefas.join(`, `)}`);


