// Metódo push
let tarefas = ["Estudar JavaScript",
    "Fazer exercícios de matemática", 
    "Lavar a louça", 
    "Comprar mercado", 
    "Ir à academia",
    "Ler um livro", 
    "Fazer revisão para o teste", 
    "Limpar o quarto", 
    "Estudar para concurso", 
    "Organizar o computador"];

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

//Etapa 5: Verificando se uma Tarefa Existe (Metódo includes) 

//Verificando se o array possui um determinado elemento
console.log(`As tarefas incluem Ir à academia? ${tarefas.includes(`Ir à academia`)}`);


// Etapa 6: Transformando a Lista em String (Metódo join) 

// Convertendo o array em uma string 
console.log(`Tarefas como string: ${tarefas.join(`, `)}`);


//  Etapa 7: Extraindo uma Parte da Lista (Metódo splice) 

// Extraindo uma Parte da Lista 
console.log(`Parte da tarefa: (índices 2 a 4): ${tarefas.slice(2, 5)}`);

// Etapa 8: Alterando a Lista (Metódos splice) 

console.log(`Antes do splice: ${tarefas.join(`, `)}`);



// Removendo o indice 3 
let elementoRemovido = tarefas.splice(3, 1);
console.log(`Depois do splice: ${tarefas}`);
console.log(`Elemento removido: ${elementoRemovido}`);

// Substituindo por uma nova tarefa
tarefas [3] = 'Cuidar das plantas'
console.log(`Depois da substituição: ${tarefas}`);


//Concatenando Tarefas (Metódo concat)
let Tarefa02 = ["Assitir séries", "Ir ao médico"];

console.log(`Tarefas combinadas: ${tarefas.concat(Tarefa02)}`);
console.log(`Tarefas combinadas: ${Tarefa02.concat(Tarefa02).join(`, `)}`);


// Etapa 10: Transformando as Tarefas (Metódo map)

// Inserindo a palavra fazer no ínicio das tarefas
let adiconaTarefas = tarefas.map(tarefas=> "Fazer: " + tarefas)
console.log(`Inserir a palavra fazer: ${adiconaTarefas}`);

// Etapa 11: Filtrando Tarefas (Metódos filter )

// Filtrando as tarefas que têm mais de 15 caracteres
let tarefatFiltrada = tarefas.filter(tarefas => tarefas.length > 15);
console.log(`Tarefas filtradas (elementos com mais de 15 letras): ${tarefatFiltrada}`);


// Etapa 12: Ordenando as Tarefas (Metódo sort)
let tarefasOrdenadas = tarefas.sort();

console.log(`Tarefas ordenadas ${tarefasOrdenadas}`);

