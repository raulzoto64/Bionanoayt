import React from "react";
import {
  Box,
  Typography,
  Paper,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  FileCheck,
  TrendingUp,
} from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Estilos base de Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const milestones = [
  {
    year: "2019",
    title: "Concepción de la idea",
    description: "Innovación con propósito",
    icon: Lightbulb,
  },
  {
    year: "2021",
    title: "Registro de Patente",
    description: "Sostenibilidad y liderazgo tecnológico",
    icon: FileCheck,
  },
  {
    year: "2024-2025",
    title: "Venta y escalabilidad comercial",
    description: "BNX y Z-Klean",
    icon: TrendingUp,
  },
  {
    year: "Futuro",
    title: "Expansión Internacional",
    description: "Nuevas fronteras",
    icon: TrendingUp,
  },
];

export function TimelineMUI() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Definición de colores según manual de marca
  const VERDE_VIBRANTE = "#19FF00"; // Representa la bio-regeneración y energía
  const VERDE_PROFUNDO = "#1C5D15"; // Aporta seriedad, estabilidad y confianza científica

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: VERDE_PROFUNDO,
        color: "white",
        textAlign: "center",
        overflow: "hidden",
        position: "relative",
        // Configuración de los indicadores (dots)
        "& .swiper-pagination-bullet": {
          width: "10px !important",
          height: "10px !important",
          bgcolor: `${VERDE_VIBRANTE} !important`,
          opacity: "0.3 !important",
          transition: "all 0.3s ease !important",
        },
        "& .swiper-pagination-bullet-active": {
          bgcolor: `${VERDE_VIBRANTE} !important`,
          opacity: "1 !important",
          width: "30px !important",
          borderRadius: "6px !important",
        },
      }}
    >
      <Typography
        variant={isMobile ? "h4" : "h2"}
        sx={{ mb: 6, fontWeight: "bold" }}
      >
        Nuestra Trayectoria
      </Typography>

      <Box
        sx={{
          position: "relative",
          maxWidth: 1100,
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        {/* Flecha Izquierda */}
        <IconButton
          className="timeline-prev"
          sx={{
            position: "absolute",
            left: -60,
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: VERDE_VIBRANTE,
            zIndex: 10,
            width: 35,
            height: 35,
            display: isMobile ? "none" : "flex",
            "&:hover": { bgcolor: VERDE_VIBRANTE, opacity: 0.8 },
          }}
        >
          <ChevronLeft color={VERDE_PROFUNDO} size={20} />
        </IconButton>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={isMobile ? 1 : 3}
          loop={true}
          navigation={{
            nextEl: ".timeline-next",
            prevEl: ".timeline-prev",
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          style={{ padding: "20px 10px 70px 10px" }}
        >
          {milestones.map((item, index) => (
            <SwiperSlide key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  bgcolor: "rgba(98, 153, 96, 0.3)",
                  borderRadius: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: 300,
                  justifyContent: "center",
                  border: `1px solid ${VERDE_VIBRANTE}33`,
                  transition: "0.3s",
                  "&:hover": {
                    bgcolor: "rgba(98, 153, 96, 0.4)",
                    borderColor: VERDE_VIBRANTE,
                  },
                }}
              >
                <Box
                  sx={{
                    bgcolor: VERDE_VIBRANTE,
                    p: 2,
                    borderRadius: "50%",
                    mb: 2,
                    display: "flex",
                  }}
                >
                  <item.icon size={32} color={VERDE_PROFUNDO} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{ color: VERDE_VIBRANTE, fontWeight: "bold" }}
                >
                  {item.year}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "white", my: 1, fontSize: "1.1rem" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.8)" }}
                >
                  {item.description}
                </Typography>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Flecha Derecha */}
        <IconButton
          className="timeline-next"
          sx={{
            position: "absolute",
            right: -60,
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: VERDE_VIBRANTE,
            zIndex: 10,
            width: 35,
            height: 35,
            display: isMobile ? "none" : "flex",
            "&:hover": { bgcolor: VERDE_VIBRANTE, opacity: 0.8 },
          }}
        >
          <ChevronRight color={VERDE_PROFUNDO} size={20} />
        </IconButton>
      </Box>
    </Box>
  );
}