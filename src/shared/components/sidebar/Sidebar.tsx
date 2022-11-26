import {
  Avatar,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode } from "react";

interface ISidebarProps {
  children: ReactNode;
}

export const Sidebar = ({ children }: ISidebarProps) => {
  const theme = useTheme(); //Acesssa o Tema da aplicação MUI
  const smDown = useMediaQuery(theme.breakpoints.down("sm")); //Verifica se o tamanho da tela é menor que sm

  return (
    <>
      <Drawer open={true} variant={smDown ? "temporary" : "permanent"}>
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{
                width: theme.spacing(12),
                height: theme.spacing(12),
              }}
              alt="Avatar do usuário"
              src="https://github.com/chrmartins.png"
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Página inicial" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
