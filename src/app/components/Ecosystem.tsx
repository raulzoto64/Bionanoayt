import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Avatar, 
  useMediaQuery, 
  useTheme,
  IconButton
} from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const allies = [
  { name: "Capiro", sector: "Agrícola", initials: "CP" },
  { name: "Coatings", sector: "Recubrimientos", initials: "CT" },
  { name: "Cecoltec", sector: "Tecnología", initials: "CL" },
  { name: "BioTech Solutions", sector: "Biotecnología", initials: "BTS" },
  { name: "Green Industries", sector: "Sostenibilidad", initials: "GI" },
  { name: "Eco Plant", sector: "Ecología", initials: "EP" },
  { name: "Agro Tech", sector: "Agraria", initials: "AT" },
  { name: "Pure Water", sector: "Recursos", initials: "PW" },
];

export function EcosystemMUI() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Colores corporativos según Memoria Descriptiva
  const VERDE_VIBRANTE = "#19FF00"; 
  const VERDE_PROFUNDO = "#1C5D15";

  return (
    <Box sx={{ 
      py: 8, 
      bgcolor: 'rgba(98, 153, 96, 0.1)', 
      textAlign: 'center',
      overflow: 'hidden',
      position: 'relative',
      // ESTILOS DE LOS DOTS SINCRONIZADOS
      "& .swiper-pagination-bullet": {
        width: "10px !important",
        height: "10px !important",
        bgcolor: `${VERDE_PROFUNDO} !important`,
        opacity: "0.3 !important",
        transition: "all 0.3s ease !important",
      },
      "& .swiper-pagination-bullet-active": {
        bgcolor: `${VERDE_VIBRANTE} !important`,
        opacity: "1 !important",
        width: "30px !important", 
        borderRadius: "6px !important",
      }
    }}>
      <Typography 
        variant={isMobile ? "h4" : "h2"} 
        sx={{ mb: 6, color: VERDE_PROFUNDO, fontWeight: 'bold' }}
      >
        Ecosistema y Aliados
      </Typography>

      <Box sx={{ 
        position: 'relative', 
        maxWidth: 1100, 
        mx: 'auto', 
        px: { xs: 2, md: 0 } 
      }}>
        
        {/* FLECHA IZQUIERDA - Oculta en móvil */}
        <IconButton
          className="prev-btn"
          sx={{
            position: 'absolute',
            left: -60,
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: VERDE_VIBRANTE,
            zIndex: 10,
            width: 35,
            height: 35,
            display: isMobile ? 'none' : 'flex',
            boxShadow: 2,
            '&:hover': { bgcolor: VERDE_VIBRANTE, opacity: 0.9 },
          }}
        >
          <ChevronLeft color={VERDE_PROFUNDO} size={20} />
        </IconButton>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={25}
          slidesPerView={isMobile ? 1 : 4}
          loop={true}
          navigation={{
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          style={{ padding: '20px 10px 70px 10px' }}
        >
          {allies.map((ally, index) => (
            <SwiperSlide key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  bgcolor: 'white',
                  borderRadius: 4,
                  border: '2px solid rgba(98, 153, 96, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: 280,
                  justifyContent: 'center',
                  transition: '0.3s',
                  '&:hover': { 
                    borderColor: VERDE_VIBRANTE,
                    transform: 'translateY(-8px)' 
                  }
                }}
              >
                <Avatar
                  sx={{ 
                    width: 80, height: 80, mb: 2, 
                    fontSize: '1.5rem', fontWeight: 'bold',
                    background: `linear-gradient(135deg, ${VERDE_PROFUNDO} 0%, #629960 100%)`,
                    border: `3px solid ${VERDE_VIBRANTE}`
                  }}
                >
                  {ally.initials}
                </Avatar>
                
                <Typography variant="h6" sx={{ color: VERDE_PROFUNDO, fontWeight: 'bold', mb: 0.5, fontSize: '1.1rem' }}>
                  {ally.name}
                </Typography>
                
                <Typography 
                  variant="caption" 
                  sx={{ color: '#629960', textTransform: 'uppercase', fontWeight: 'bold' }}
                >
                  {ally.sector}
                </Typography>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* FLECHA DERECHA - Oculta en móvil */}
        <IconButton
          className="next-btn"
          sx={{
            position: 'absolute',
            right: -60,
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: VERDE_VIBRANTE,
            zIndex: 10,
            width: 35,
            height: 35,
            display: isMobile ? 'none' : 'flex',
            boxShadow: 2,
            '&:hover': { bgcolor: VERDE_VIBRANTE, opacity: 0.9 }
          }}
        >
          <ChevronRight color={VERDE_PROFUNDO} size={20} />
        </IconButton>
      </Box>
    </Box>
  );
}