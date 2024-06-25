function adicionarConsulta(paciente, medico, data, hora) {
   
    const novaConsulta = {
        paciente: paciente,
        medico: medico,
        data: data,
        hora: hora
    };

    return novaConsulta;
}

const consulta1 = adicionarConsulta('João Silva', 'Dr. Ana Souza', '2024-06-25', '14:30');

console.log('Consulta adicionada:');
console.log(consulta1);