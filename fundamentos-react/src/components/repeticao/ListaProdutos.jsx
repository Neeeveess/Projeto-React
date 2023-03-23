import produtos from "../../data/produtos";
import "./ListaProdutos.css";

export default (props) => {
  const produtosJSX = produtos.map((produto, i) => {
    return (
      <tr key={produto.id} className={i % 2 === 0 ? "par" : ""}>
        <td>{produto.id}</td>

        <td>{produto.nome}</td>

        <td>{produto.preco.toFixed(2).replace(".", ",")}</td>
      </tr>
    );
  });

  return (
    <div>
      <table className="tabela">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{produtosJSX}</tbody>
      </table>
    </div>
  );
};
