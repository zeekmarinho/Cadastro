var uid = 0;

function ContatoController($scope){

    $scope.contatos = [];

    $scope.salvaContato = function(){

        if($scope.novocontato.id == null){
            $scope.novocontato.id = uid++;
            $scope.contatos.push($scope.novocontato);
        }
        else{
            for(i in $scope.contatos){
                if($scope.contatos[i].id == $scope.novocontato.id){
                    $scope.contatos[i] = $scope.novocontato;
                }
            }
        }
        $scope.novocontato = {} //Limpar
    }
    $scope.deleta = function(id){
        for(i in $scope.contatos){
            if($scope.contatos[i].id == id){
                $scope.contatos.splice(i,1);
                $scope.novocontato = {};
            }
        }
    }

}