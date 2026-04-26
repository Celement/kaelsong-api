import { Box, Typography, Container, Paper, Divider, Chip, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const BaseIndex = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 136px)',
        bgcolor: 'background.default',
        py: { xs: 4, md: 6 }
      }}
    >
      <Container maxWidth="md">
        {/* 文章卡片 */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: '16px',
            border: `1px solid ${theme.palette.divider}`,
            overflow: 'hidden',
            bgcolor: 'background.paper'
          }}
        >
          {/* 文章头部 */}
          <Box sx={{ px: { xs: 3, md: 5 }, pt: { xs: 3, md: 4 }, pb: 2 }}>
            <Stack direction="row" spacing={1} sx={{ mb: 2.5 }} flexWrap="wrap" useFlexGap>
              <Chip label="🧠 AI 学习" size="small" sx={{ borderRadius: '8px', fontWeight: 500 }} />
              <Chip label="📝 技术笔记" size="small" variant="outlined" sx={{ borderRadius: '8px' }} />
              <Chip label="🔥 热门" size="small" variant="outlined" color="error" sx={{ borderRadius: '8px' }} />
            </Stack>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '1.6rem', md: '2rem' },
                color: 'text.primary',
                lineHeight: 1.4,
                mb: 1.5
              }}
            >
              ✨ OpenClaw 深度解析：从零到一构建你的 AI 工作流
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              📅 2024.12.20 &nbsp;·&nbsp; ☕ 阅读约 5 分钟 &nbsp;·&nbsp; 💬 随笔记录
            </Typography>
          </Box>

          <Divider />

          {/* 文章正文 */}
          <Box sx={{ px: { xs: 3, md: 5 }, py: { xs: 3, md: 4 } }}>

            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 2, mb: 3, fontSize: '1.05rem' }}>
              🌟 最近在研究 OpenClaw 这个项目，发现它真的是一个宝藏级别的开源工具！今天就来分享一下我的学习笔记，希望能帮到同样在探索 AI 领域的小伙伴们～
            </Typography>

            {/* 第一节 */}
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'text.primary', fontSize: '1.2rem' }}>
              🎯 什么是 OpenClaw？
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 2, mb: 1.5, fontSize: '1.02rem' }}>
              简单来说，OpenClaw 是一个开源的 AI 模型聚合与管理平台 🤖 它的核心理念是：
            </Typography>
            <Box
              sx={{
                bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                borderLeft: `3px solid ${theme.palette.primary.main}`,
                borderRadius: '0 8px 8px 0',
                px: 3,
                py: 2,
                mb: 3
              }}
            >
              <Typography variant="body1" sx={{ lineHeight: 2, color: 'text.secondary', fontStyle: 'italic' }}>
                💡 "一个接口，连接所有 AI 模型。让开发者不再为对接不同服务商的 API 而烦恼。"
              </Typography>
            </Box>

            {/* 第二节 */}
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'text.primary', fontSize: '1.2rem' }}>
              🚀 核心特性一览
            </Typography>
            <Box sx={{ mb: 3 }}>
              {[
                { emoji: '🔗', title: '统一接口', desc: '兼容 OpenAI API 格式，无缝切换不同模型供应商' },
                { emoji: '🛡️', title: '安全隔离', desc: '令牌级别的权限控制，每个用户独立配额管理' },
                { emoji: '📊', title: '用量追踪', desc: '详细的调用日志和费用统计，一目了然' },
                { emoji: '⚡', title: '高性能', desc: '支持流式传输，响应速度快，并发能力强' },
                { emoji: '🎨', title: '易于扩展', desc: '插件化架构，轻松接入新的模型供应商' }
              ].map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    py: 1.5,
                    borderBottom: i < 4 ? `1px dashed ${theme.palette.divider}` : 'none'
                  }}
                >
                  <Typography sx={{ fontSize: '1.4rem', lineHeight: 1.6, flexShrink: 0 }}>{item.emoji}</Typography>
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.3 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* 第三节 */}
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'text.primary', fontSize: '1.2rem' }}>
              🌈 我的使用感受
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 2, mb: 2, fontSize: '1.02rem' }}>
              用了一段时间之后，真的感觉效率提升了好多！以前要对接 OpenAI、Claude、通义千问这些不同的 API，每个都要写一套适配代码 😵‍💫 现在只需要统一走一个接口就搞定了～
            </Typography>
            <Box
              sx={{
                bgcolor: theme.palette.mode === 'dark' ? 'rgba(136,77,255,0.08)' : 'rgba(136,77,255,0.04)',
                borderRadius: '12px',
                px: 3,
                py: 2.5,
                mb: 3
              }}
            >
              <Typography variant="body1" sx={{ lineHeight: 2, color: 'text.secondary' }}>
                🏷️ <strong>个人评分：</strong><br />
                易用性 ⭐⭐⭐⭐⭐ &nbsp;|&nbsp; 稳定性 ⭐⭐⭐⭐ &nbsp;|&nbsp; 文档 ⭐⭐⭐⭐<br />
                社区活跃度 ⭐⭐⭐⭐⭐ &nbsp;|&nbsp; 扩展性 ⭐⭐⭐⭐⭐
              </Typography>
            </Box>

            {/* 第四节 */}
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'text.primary', fontSize: '1.2rem' }}>
              📌 写在最后
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 2, mb: 2, fontSize: '1.02rem' }}>
              如果你也在做 AI 相关的项目，强烈推荐试试 OpenClaw 🎉 无论是个人开发者还是团队使用，它都能帮你省下大量的时间和精力。
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 2, fontSize: '1.02rem' }}>
              技术的世界总是充满惊喜，保持好奇心，持续学习 📚 我们下篇笔记见！👋
            </Typography>

            <Divider sx={{ my: 3 }} />

            {/* 标签 */}
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip label="# OpenClaw" size="small" variant="outlined" sx={{ borderRadius: '6px', fontSize: '0.8rem' }} />
              <Chip label="# AI工具" size="small" variant="outlined" sx={{ borderRadius: '6px', fontSize: '0.8rem' }} />
              <Chip label="# 开源项目" size="small" variant="outlined" sx={{ borderRadius: '6px', fontSize: '0.8rem' }} />
              <Chip label="# 学习笔记" size="small" variant="outlined" sx={{ borderRadius: '6px', fontSize: '0.8rem' }} />
              <Chip label="# API管理" size="small" variant="outlined" sx={{ borderRadius: '6px', fontSize: '0.8rem' }} />
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default BaseIndex;
