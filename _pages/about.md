---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

---

# 👔 Biography
I am Huidong Ma, a Ph.D. candidate in Computer Science and Technology at Nankai University, advised by Prof. [Xiaoguang Liu](https://cc.nankai.edu.cn/2021/0323/c13619a548878/page.htm) and Prof. [Gang Wang](https://cc.nankai.edu.cn/2021/0323/c13619a548871/page.htm). Currently, I am a visiting student at the College of Computing and Data Science, Nanyang Technological University, working with Prof. [Wentong Cai](https://personal.ntu.edu.sg/aswtcai/) (Sept. 2025 – Aug. 2026). My research interests include **Data Compression**, **Deep Learning**, and **High-Performance Computing**. Please feel free to reach out if you are interested in my research.

---

# 📄 Publications

<div class='paper-filter-toolbar'>
  <div class='paper-filter-row' id='paper-filter-row' role='group' aria-label='Filter papers by tags'>
    <button class='paper-filter-chip' type='button' data-filter-tag='all' aria-pressed='false'>All</button>
    <button class='paper-filter-chip' type='button' data-filter-tag='first-author' aria-pressed='true'>First Author</button>
    <button class='paper-filter-chip' type='button' data-filter-tag='compression' aria-pressed='false'>Compression</button>
    <button class='paper-filter-chip' type='button' data-filter-tag='deep-learning' aria-pressed='false'>Deep Learning</button>
    <button class='paper-filter-chip' type='button' data-filter-tag='genomics' aria-pressed='false'>Genomics</button>
    <button class='paper-filter-chip' type='button' data-filter-tag='bioinformatics' aria-pressed='false'>Bioinformatics</button>
    <button class='paper-filter-chip' type='button' data-filter-tag='hpc' aria-pressed='false'>HPC</button>
  </div>
</div>

<div class='paper-list' id='paper-list'>
  <article class='paper-list-item' data-paper-tags='first-author,compression,deep-learning'>
    <p class='work-title'>Efficient Learned Data Compression via Dual-Stream Feature Decoupling</p>
    <p class='work-authors'><strong>Huidong Ma</strong>, Xinyan Shi, Hui Sun, Xiaofei Yue, Xiaoguang Liu, Gang Wang, Wentong Cai</p>
    <div class='work-meta-row'>
      <p class='work-meta'>Venue: ACL 2026, Main Conference</p>
      <a class='paper-link-button' href='https://arxiv.org/abs/2604.07239' target='_blank' rel='noopener noreferrer'>&#128196; Paper</a>
    </div>
    <div class='paper-tags'>
      <span class='paper-tag'>Compression</span>
      <span class='paper-tag'>Deep Learning</span>
    </div>
  </article>

  <article class='paper-list-item' data-paper-tags='first-author,compression,deep-learning'>
    <p class='work-title'>Learned Image Compression via Sparse Attention and Adaptive Frequency</p>
    <p class='work-authors'><strong>Huidong Ma</strong>, Xinyan Shi, Hui Sun, Xiaofei Yue, Xiaoguang Liu, Gang Wang, Wentong Cai</p>
    <div class='work-meta-row'>
      <p class='work-meta'>Venue: CVPR 2026</p>
      <span class='paper-link-button paper-link-button--disabled' aria-disabled='true'>&#128196; Paper</span>
    </div>
    <div class='paper-tags'>
      <span class='paper-tag'>Compression</span>
      <span class='paper-tag'>Deep Learning</span>
    </div>
  </article>

  <article class='paper-list-item' data-paper-tags='first-author,compression,deep-learning,hpc'>
    <p class='work-title'>MSDZip: Universal Lossless Compression for Multi-source Data via Stepwise-parallel and Learning-based Prediction</p>
    <p class='work-authors'><strong>Huidong Ma</strong><sup>†</sup>, Hui Sun<sup>†</sup>, Liping Yi, Yanfeng Ding, Xiaoguang Liu, Gang Wang</p>
    <div class='work-meta-row'>
      <p class='work-meta'>Venue: WWW 2025</p>
      <a class='paper-link-button' href='https://dl.acm.org/doi/10.1145/3696410.3714655' target='_blank' rel='noopener noreferrer'>&#128196; Paper</a>
    </div>
    <div class='paper-tags'>
      <span class='paper-tag'>Compression</span>
      <span class='paper-tag'>Deep Learning</span>
      <span class='paper-tag'>HPC</span>
    </div>
  </article>

  <article class='paper-list-item' data-paper-tags='first-author,compression,deep-learning'>
    <p class='work-title'>Multi-source Data Lossless Compression via Parallel Expansion Mapping and xLSTM</p>
    <p class='work-authors'><strong>Huidong Ma</strong>, Hui Sun, Liping Yi, Xiaoguang Liu, Gang Wang</p>
    <div class='work-meta-row'>
      <p class='work-meta'>Venue: ICASSP 2025</p>
      <a class='paper-link-button' href='https://ieeexplore.ieee.org/document/10889184' target='_blank' rel='noopener noreferrer'>&#128196; Paper</a>
    </div>
    <div class='paper-tags'>
      <span class='paper-tag'>Compression</span>
      <span class='paper-tag'>Deep Learning</span>
    </div>
  </article>

  <article class='paper-list-item' data-paper-tags='first-author,compression,deep-learning'>
    <p class='work-title'>A Survey and Benchmark Evaluation for Neural-Network-Based Lossless Universal Compressors Toward Multi-Source Data</p>
    <p class='work-authors'>Hui Sun<sup>†</sup>, <strong>Huidong Ma</strong><sup>†</sup>, Feng Ling, Haonan Xie, Yongxia Sun, Liping Yi, Meng Yan, Cheng Zhong, Xiaoguang Liu, Gang Wang</p>
    <div class='work-meta-row'>
      <p class='work-meta'>Venue: FCS 2025</p>
      <a class='paper-link-button' href='https://link.springer.com/article/10.1007/s11704-024-40300-5' target='_blank' rel='noopener noreferrer'>&#128196; Paper</a>
    </div>
    <div class='paper-tags'>
      <span class='paper-tag'>Compression</span>
      <span class='paper-tag'>Deep Learning</span>
    </div>
  </article>

  <article class='paper-list-item' data-paper-tags='first-author,compression,genomics'>
    <p class='work-title'>LRCB: A Comprehensive Benchmark Evaluation of Reference-free Lossless Compression Tools for Genomics Sequencing Long Reads Data</p>
    <p class='work-authors'>Hui Sun<sup>†</sup>, <strong>Huidong Ma</strong><sup>†</sup>, Yingfeng Zheng, Haonan Xie, Meng Yan, Cheng Zhong, Xiaoguang Liu, Gang Wang</p>
    <div class='work-meta-row'>
      <p class='work-meta'>Venue: DCC 2024</p>
      <a class='paper-link-button' href='https://ieeexplore.ieee.org/abstract/document/10533699' target='_blank' rel='noopener noreferrer'>&#128196; Paper</a>
    </div>
    <div class='paper-tags'>
      <span class='paper-tag'>Compression</span>
      <span class='paper-tag'>Genomics</span>
    </div>
  </article>

  <article class='paper-list-item' data-paper-tags='first-author,compression,genomics,hpc'>
    <p class='work-title'>SR2C: A Structurally Redundant Short Reads Collapser for Optimizing DNA Data Compression</p>
    <p class='work-authors'>Hui Sun<sup>†</sup>, <strong>Huidong Ma</strong><sup>†</sup>, Yingfeng Zheng, Haonan Xie, Xiaofei Wang, Xiaoguang Liu, Gang Wang</p>
    <div class='work-meta-row'>
      <p class='work-meta'>Venue: ICPADS 2023</p>
      <a class='paper-link-button' href='https://ieeexplore.ieee.org/document/10476304' target='_blank' rel='noopener noreferrer'>&#128196; Paper</a>
    </div>
    <div class='paper-tags'>
      <span class='paper-tag'>Compression</span>
      <span class='paper-tag'>Genomics</span>
      <span class='paper-tag'>HPC</span>
    </div>
  </article>

  <article class='paper-list-item' data-paper-tags='first-author,bioinformatics,genomics'>
    <p class='work-title'>ricME: Long-Read Based Mobile Element Variant Detection Using Sequence Realignment and Identity Calculation</p>
    <p class='work-authors'><strong>Huidong Ma</strong>, Cheng Zhong, Hui Sun, Danyang Chen, Haixiang Lin</p>
    <div class='work-meta-row'>
      <p class='work-meta'>Venue: ISBRA 2023</p>
      <a class='paper-link-button' href='https://link.springer.com/chapter/10.1007/978-981-99-7074-2_13' target='_blank' rel='noopener noreferrer'>&#128196; Paper</a>
    </div>
    <div class='paper-tags'>
      <span class='paper-tag'>Bioinformatics</span>
      <span class='paper-tag'>Genomics</span>
    </div>
  </article>

  <article class='paper-list-item' data-paper-tags='first-author,bioinformatics,deep-learning'>
    <p class='work-title'>cnnLSV: detecting structural variants by encoding long-read alignment information and convolutional neural network</p>
    <p class='work-authors'><strong>Huidong Ma</strong>, Cheng Zhong, Danyang Chen, Haofa He, Feng Yang</p>
    <div class='work-meta-row'>
      <p class='work-meta'>Venue: BMC Bioinformatics 2023</p>
      <a class='paper-link-button' href='https://link.springer.com/article/10.1186/s12859-023-05243-x' target='_blank' rel='noopener noreferrer'>&#128196; Paper</a>
    </div>
    <div class='paper-tags'>
      <span class='paper-tag'>Bioinformatics</span>
      <span class='paper-tag'>Deep Learning</span>
    </div>
  </article>

  <article class='paper-list-item' data-paper-tags='compression,genomics,deep-learning'>
    <p class='work-title'>AgentGC: Evolutionary Learning-based Lossless Compression for Genomics Data with LLM-driven Multiple Agent</p>
    <p class='work-authors'>Hui Sun, Yanfeng Ding, Huidong Ma, Chang Xu, Keyan Jin, Lizheng Zu, Cheng Zhong, Xiaoguang Liu, Gang Wang, Wentong Cai</p>
    <div class='work-meta-row'>
      <p class='work-meta'>Venue: ACL 2026, Findings</p>
      <a class='paper-link-button' href='https://arxiv.org/abs/2601.13559' target='_blank' rel='noopener noreferrer'>&#128196; Paper</a>
    </div>
    <div class='paper-tags'>
      <span class='paper-tag'>Compression</span>
      <span class='paper-tag'>Genomics</span>
      <span class='paper-tag'>Deep Learning</span>
    </div>
  </article>

  <article class='paper-list-item' data-paper-tags='deep-learning,hpc'>
    <p class='work-title'>sMoE: Elastic MoE-Based Inference with Serverless Computing via Fine-grained Expert Scaling</p>
    <p class='work-authors'>Xiaofei Yue, Ziming Zhao, Jiongchi Yu, <strong>Huidong Ma</strong>, Zhaoxuan Li, Tingting Li, Jianwei Yin</p>
    <div class='work-meta-row'>
      <p class='work-meta'>Venue: DAC 2026</p>
      <span class='paper-link-button paper-link-button--disabled' aria-disabled='true'>&#128196; Paper</span>
    </div>
    <div class='paper-tags'>
      <span class='paper-tag'>Deep Learning</span>
      <span class='paper-tag'>HPC</span>
    </div>
  </article>

  <article class='paper-list-item' data-paper-tags='compression,genomics,hpc,deep-learning'>
    <p class='work-title'>PMKLC: Parallel Multi-Knowledge Learning-based Lossless Compression for Large-Scale Genomics Database</p>
    <p class='work-authors'>Hui Sun, Yanfeng Ding, Liping Yi, <strong>Huidong Ma</strong>, Gang Wang, Xiaoguang Liu, Cheng Zhong, Wentong Cai</p>
    <div class='work-meta-row'>
      <p class='work-meta'>Venue: SIGKDD 2025</p>
      <a class='paper-link-button' href='https://dl.acm.org/doi/10.1145/3711896.3737083' target='_blank' rel='noopener noreferrer'>&#128196; Paper</a>
    </div>
    <div class='paper-tags'>
      <span class='paper-tag'>Compression</span>
      <span class='paper-tag'>Genomics</span>
      <span class='paper-tag'>HPC</span>
      <span class='paper-tag'>Deep Learning</span>
    </div>
  </article>

  <article class='paper-list-item' data-paper-tags='compression,genomics,deep-learning'>
    <p class='work-title'>Adaptive Lossless Compression for Genomics Data by Multiple (s, k)-mer Encoding and XLSTM</p>
    <p class='work-authors'>Hui Sun<sup>†</sup>, Yanfeng Ding<sup>†</sup>, Liping Yi, <strong>Huidong Ma</strong>, Haonan Xie, Gang Wang, Xiaoguang Liu</p>
    <div class='work-meta-row'>
      <p class='work-meta'>Venue: ICASSP 2025</p>
      <a class='paper-link-button' href='https://ieeexplore.ieee.org/abstract/document/10887721' target='_blank' rel='noopener noreferrer'>&#128196; Paper</a>
    </div>
    <div class='paper-tags'>
      <span class='paper-tag'>Compression</span>
      <span class='paper-tag'>Genomics</span>
      <span class='paper-tag'>Deep Learning</span>
    </div>
  </article>

  <article class='paper-list-item' data-paper-tags='compression,genomics,deep-learning'>
    <p class='work-title'>Genomics Data Lossless Compression with (s,k)-mer Encoding and Deep Neural Networks</p>
    <p class='work-authors'>Hui Sun<sup>†</sup>, Liping Yi<sup>†</sup>, <strong>Huidong Ma</strong>, Yongxia Sun, Yingfeng Zheng, Wenwen Cui, Meng Yan, Xiaoguang Liu, Gang Wang</p>
    <div class='work-meta-row'>
      <p class='work-meta'>Venue: AAAI 2025</p>
      <a class='paper-link-button' href='https://ojs.aaai.org/index.php/AAAI/article/view/33371' target='_blank' rel='noopener noreferrer'>&#128196; Paper</a>
    </div>
    <div class='paper-tags'>
      <span class='paper-tag'>Compression</span>
      <span class='paper-tag'>Genomics</span>
      <span class='paper-tag'>Deep Learning</span>
    </div>
  </article>

  <article class='paper-list-item' data-paper-tags='compression,genomics,hpc'>
    <p class='work-title'>PQSDC: a parallel lossless compressor for quality scores data via sequences partition and Run-Length prediction mapping</p>
    <p class='work-authors'>Hui Sun, Yingfeng Zheng, Haonan Xie, <strong>Huidong Ma</strong>, Cheng Zhong, Meng Yan, Xiaoguang Liu, Gang Wang</p>
    <div class='work-meta-row'>
      <p class='work-meta'>Venue: Bioinformatics 2024</p>
      <a class='paper-link-button' href='https://academic.oup.com/bioinformatics/article/40/5/btae323/7676123?login=true' target='_blank' rel='noopener noreferrer'>&#128196; Paper</a>
    </div>
    <div class='paper-tags'>
      <span class='paper-tag'>Compression</span>
      <span class='paper-tag'>Genomics</span>
      <span class='paper-tag'>HPC</span>
    </div>
  </article>

  <article class='paper-list-item' data-paper-tags='compression,genomics,hpc'>
    <p class='work-title'>PMFFRC: a large-scale genomic short reads compression optimizer via memory modeling and redundant clustering</p>
    <p class='work-authors'>Hui Sun, Yingfeng Zheng, Haonan Xie, <strong>Huidong Ma</strong>, Xiaoguang Liu, Gang Wang</p>
    <div class='work-meta-row'>
      <p class='work-meta'>Venue: BMC Bioinformatics 2023</p>
      <a class='paper-link-button' href='https://link.springer.com/article/10.1186/s12859-023-05566-9' target='_blank' rel='noopener noreferrer'>&#128196; Paper</a>
    </div>
    <div class='paper-tags'>
      <span class='paper-tag'>Compression</span>
      <span class='paper-tag'>Genomics</span>
      <span class='paper-tag'>HPC</span>
    </div>
  </article>
</div>

<p class='paper-filter-empty' id='paper-filter-empty' hidden>No papers match the selected tags.</p>

<script>
  (function () {
    const activePaperFilters = new Set(['first-author']);

    function updatePaperFilterButtons() {
      const allActive = activePaperFilters.size === 0;
      document.querySelectorAll('[data-filter-tag]').forEach(function (button) {
        var tag = button.dataset.filterTag;
        var isActive = tag === 'all' ? allActive : activePaperFilters.has(tag);
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
      });
    }

    function applyPaperFilters() {
      var items = Array.from(document.querySelectorAll('.paper-list-item[data-paper-tags]'));
      var emptyState = document.getElementById('paper-filter-empty');
      var activeTags = Array.from(activePaperFilters);
      var visibleCount = 0;

      items.forEach(function (item) {
        var tags = item.dataset.paperTags.split(',').map(function (t) { return t.trim(); }).filter(Boolean);
        var matched = activeTags.length === 0 || activeTags.every(function (t) { return tags.includes(t); });
        item.hidden = !matched;
        if (matched) visibleCount += 1;
      });

      if (emptyState) emptyState.hidden = visibleCount !== 0;
      updatePaperFilterButtons();
    }

    document.querySelectorAll('[data-filter-tag]').forEach(function (button) {
      button.addEventListener('click', function () {
        var tag = button.dataset.filterTag;
        if (tag === 'all') {
          activePaperFilters.clear();
        } else if (activePaperFilters.has(tag)) {
          activePaperFilters.delete(tag);
        } else {
          activePaperFilters.add(tag);
        }
        applyPaperFilters();
      });
    });

    applyPaperFilters();
  })();
</script>

---

# 🚩 Professional Activities
### Reviewer for Journals
- Information Sciences, 2026
- IEEE Transactions on Network Science and Engineering, 2025
- GiGaScience, 2025
- Journal of Algorithms & Computational Technology, 2023

### Reviewer for Conferences
- ACM SIGKDD Conference on Knowledge Discovery and Data Mining (SIGKDD), 2026
- The Web Conference (WWW), 2025
- IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP), 2025

---
