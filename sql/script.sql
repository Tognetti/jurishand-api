CREATE DATABASE jurishand_api;

USE jurishand_api;

CREATE TABLE artigo (
	id INT AUTO_INCREMENT PRIMARY KEY, 
	titulo VARCHAR(100) NOT NULL, 
	autor VARCHAR(50) NOT NULL,
	conteudo VARCHAR(250) NOT NULL,
    publicacao DATETIME NOT NULL,
	categoria VARCHAR(50) NOT NULL
);


INSERT INTO `jurishand_api`.`artigo` (`id`, `titulo`, `autor`, `conteudo`, `publicacao`, `categoria`) VALUES ('1', 'O que é um contrato de prestação de serviços?', 'Rogério', 'Um contrato de prestação de serviços é um acordo entre uma pessoa física ou jurídica que presta serviços e outra que os contrata. Nesse tipo de contrato, a prestação de serviços é o objeto principal e o pagamento é o objetivo do contratante.', '2022-01-10', 'Civil');
INSERT INTO `jurishand_api`.`artigo` (`id`, `titulo`, `autor`, `conteudo`, `publicacao`, `categoria`) VALUES ('2', 'Principais diferenças entre o crime doloso e culposo', 'Marta', 'O crime doloso é aquele em que o agente tem a intenção de cometer o crime, enquanto o crime culposo ocorre quando o agente não tem a intenção de cometer o crime, mas age de forma negligente ou imprudente.', '2022-02-15', 'Penal');
INSERT INTO `jurishand_api`.`artigo` (`id`, `titulo`, `autor`, `conteudo`, `publicacao`, `categoria`) VALUES ('3', 'Direitos trabalhistas dos trabalhadores rurais', 'Alessandra', 'Os trabalhadores rurais possuem direitos garantidos por lei, como jornada de trabalho diferenciada, adicional de insalubridade e férias proporcionais ao tempo de serviço. Além disso, eles também têm direito a aposentadoria rural e outros benefícios sociais.', '2022-02-16', 'Trabalhista');
