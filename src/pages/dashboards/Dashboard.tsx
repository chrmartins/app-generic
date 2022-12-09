import { ListingTools } from "../../shared/components";
import { LayoutBasePage } from "../../shared/layouts";

export const Dashboard = () => {
  return (
    <LayoutBasePage 
      titulo="Página inicial" 
      toolBar={(
        <ListingTools 
          mostrarInputBusca
          textoBotaoNovo="Nova" 
        />
      )} 
    >
      testando
    </LayoutBasePage>
  )
};
