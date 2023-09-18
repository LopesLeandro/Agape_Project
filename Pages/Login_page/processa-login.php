<?php


$serverName = "localhost\SQLExpress";
$connectionInfo = array(
    "Database" => "AGAPE",
    "UID" => "nome_do_usuario",
    "PWD" => "senha_do_usuario"
);

$conn = sqlsrv_connect($serverName, $connectionInfo);


try {
    $pdo = new PDO($dsn, $usuario, $senha);
} catch (PDOException $e) {
    echo 'Erro ao conectar ao banco de dados: ' . $e->getMessage();
    exit();
}

// Verifica as credenciais do usuário
if (isset($_POST['username']) && isset($_POST['password'])) {
    $usuario = $_POST['username'];
    $senha = $_POST['password'];

    // Prepara a consulta SQL
    $consulta = $pdo->prepare('SELECT * FROM usuarios WHERE nome = :usuario AND senha = :senha');

    // Executa a consulta SQL, passando os parâmetros de usuário e senha
    $consulta->execute(array(':usuario' => $usuario, ':senha' => $senha));

    // Verifica se a consulta SQL retornou algum resultado
    if ($consulta->rowCount() > 0) {
        // As credenciais do usuário são válidas
        echo 'Login realizado com sucesso!';
        // Aqui você pode redirecionar o usuário para a página restrita ou exibir alguma mensagem de boas-vindas
    } else {
        // As credenciais do usuário são inválidas
        echo 'Usuário ou senha inválidos.';
        // Aqui você pode exibir uma mensagem de erro no formulário de login
    }
}
?>
