# Descomplique — Site Institucional

Site institucional da **Descomplique Estratégia em Pessoas e Negócios**.

## Estrutura

```
descomplique-site/
├── index.html              # Página principal (HTML + CSS + JS inline)
├── foto_treinamento.jpeg   # Foto de treinamento (hero fallback + seção Sobre)
├── video_descomplique.mp4  # Vídeo do hero (adicionar manualmente — arquivo grande)
├── jacqueline.jpg          # Foto da consultora Jacqueline (adicionar)
├── pablo.jpg               # Foto do consultor Pablo (adicionar)
└── README.md
```

## Como subir no GitHub Pages

1. Faça o push deste repositório para o GitHub
2. Vá em **Settings → Pages**
3. Em *Source*, selecione **Deploy from a branch → main → / (root)**
4. Salve — em 1–2 minutos o site estará disponível

## Arquivos a adicionar manualmente (por serem grandes)

- `video_descomplique.mp4` — vídeo do hero (> 25MB, limite do GitHub)
- `jacqueline.jpg` — foto da consultora
- `pablo.jpg` — foto do consultor Pablo

> Para o vídeo, caso ultrapasse 25 MB, hospede no YouTube (unlisted) ou AWS S3 e atualize o `src` no HTML.

## Identidade Visual

| Token | Valor |
|-------|-------|
| Azul escuro | `#2D2952` |
| Verde neon | `#39FF14` |
| Branco | `#FFFFFF` |
| Cinza claro | `#F5F5F5` |
| Fonte display | Sora |
| Fonte corpo | DM Sans |

## Contato técnico

Site desenvolvido para Descomplique — Rio Claro, SP.
