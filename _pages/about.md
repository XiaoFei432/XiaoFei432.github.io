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

I am Huidong Ma, a Ph.D. candidate at the College of Computer Science, Nankai University, advised by Prof. [Xiaoguang Liu](https://cc.nankai.edu.cn/2021/0323/c13619a548878/page.htm) and Prof. [Gang Wang](https://cc.nankai.edu.cn/2021/0323/c13619a548871/page.htm). From September 2025 to August 2026, I am a Visiting Ph.D. Student at the College of Computing and Data Science (CCDS), Nanyang Technological University (NTU), working with Prof. [Wentong Cai](https://personal.ntu.edu.sg/aswtcai/). My research interests include **Data Compression**, **Deep Learning**, and **High-Performance Computing**. I have published over 10 papers in top-tier international conferences and journals, including WWW, AAAI, KDD, and ICASSP. Feel free to reach out if you are interested in my research.

---

# :page_facing_up: Publications 
<sup>\*</sup>: Equal Contribution &emsp; <sup>#</sup>: Corresponding Author
### First & Co-First Author Publications
- [MSDZip: Universal Lossless Compression for Multi-source Data via Stepwise-parallel and Learning-based Prediction](https://dl.acm.org/doi/10.1145/3696410.3714655)  
  **Huidong Ma**<sup>\*</sup>, Hui Sun<sup>\*</sup>, Liping Yi, Yanfeng Ding, Xiaoguang Liu<sup>#</sup>, Gang Wang<sup>#</sup>  
  *The ACM Web Conference (WWW)*, 2025  
- [Multi-source Data Lossless Compression via Parallel Expansion Mapping and xLSTM](https://ieeexplore.ieee.org/document/10889184)  
  **Huidong Ma**, Hui Sun, Liping Yi, Xiaoguang Liu<sup>#</sup>, Gang Wang<sup>#</sup>  
  *International Conference on Acoustics, Speech, and Signal Processing (ICASSP)*, 2025  
- [A Survey and Benchmark Evaluation for Neural-Network-Based Lossless Universal Compressors Toward Multi-Source Data](https://link.springer.com/article/10.1007/s11704-024-40300-5)  
  Hui Sun<sup>\*</sup>, **Huidong Ma**<sup>\*</sup>, Feng Ling, Haonan Xie, Yongxia Sun, Liping Yi, Meng Yan<sup>#</sup>, Cheng Zhong, Xiaoguang Liu, Gang Wang<sup>#</sup>  
  *Frontiers of Computer Science (FCS)*, 2025  
- [LRCB: A Comprehensive Benchmark Evaluation of Reference-free Lossless Compression Tools for Genomics Sequencing Long Reads Data](https://ieeexplore.ieee.org/abstract/document/10533699)  
  Hui Sun<sup>\*</sup>, **Huidong Ma**<sup>\*</sup>, Yingfeng Zheng, Haonan Xie, Meng Yan, Cheng Zhong, Xiaoguang Liu<sup>#</sup>, Gang Wang<sup>#</sup>  
  *Data Compression Conference (DCC)*, 2024  
- [SR2C: A Structurally Redundant Short Reads Collapser for Optimizing DNA Data Compression](https://ieeexplore.ieee.org/document/10476304)  
  Hui Sun<sup>\*</sup>, **Huidong Ma**<sup>\*</sup>, Yingfeng Zheng, Haonan Xie, Xiaofei Wang, Xiaoguang Liu<sup>#</sup>, Gang Wang<sup>#</sup>  
  *International Conference on Parallel and Distributed Systems (ICPADS)*, 2023  
- [ricME: Long-Read Based Mobile Element Variant Detection Using Sequence Realignment and Identity Calculation](https://link.springer.com/chapter/10.1007/978-981-99-7074-2_13)  
  **Huidong Ma**, Cheng Zhong<sup>#</sup>, Hui Sun, Danyang Chen, Haixiang Lin  
  *International Symposium on Bioinformatics Research and Applications (ISBRA)*, 2023  
- [cnnLSV: detecting structural variants by encoding long-read alignment information and convolutional neural network](https://link.springer.com/article/10.1186/s12859-023-05243-x)  
  **Huidong Ma**, Cheng Zhong<sup>#</sup>, Danyang Chen, Haofa He, Feng Yang  
  *BMC Bioinformatics*, 2023  
  
### Collaborative Publications
- [PMKLC: Parallel Multi-Knowledge Learning-based Lossless Compression for Large-Scale Genomics Database](https://dl.acm.org/doi/10.1145/3711896.3737083)  
  Hui Sun, Yanfeng Ding, Liping Yi, **Huidong Ma**, Gang Wang<sup>#</sup>, Xiaoguang Liu<sup>#</sup>, Cheng Zhong, Wentong Cai  
  *ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD)*, 2025  
- [Adaptive Lossless Compression for Genomics Data by Multiple (s, k)-mer Encoding and XLSTM](https://ieeexplore.ieee.org/abstract/document/10887721)  
  Hui Sun<sup>\*</sup>, Yanfeng Ding<sup>\*</sup>, Liping Yi, **Huidong Ma**, Haonan Xie, Gang Wang<sup>#</sup>, Xiaoguang Liu<sup>#</sup>  
  *International Conference on Acoustics, Speech, and Signal Processing (ICASSP)*, 2025  
- [Genomics Data Lossless Compression with (s,k)-mer Encoding and Deep Neural Networks](https://ojs.aaai.org/index.php/AAAI/article/view/33371)  
  Hui Sun<sup>\*</sup>, Liping Yi<sup>\*</sup>, **Huidong Ma**, Yongxia Sun, Yingfeng Zheng, Wenwen Cui, Meng Yan, Xiaoguang Liu<sup>#</sup>, Gang Wang<sup>#</sup>  
  *Annual AAAI Conference on Artificial Intelligence (AAAI)*, 2025  
- [PQSDC: a parallel lossless compressor for quality scores data via sequences partition and Run-Length prediction mapping](https://academic.oup.com/bioinformatics/article/40/5/btae323/7676123?login=true)  
  Hui Sun, Yingfeng Zheng, Haonan Xie, **Huidong Ma**, Cheng Zhong, Meng Yan, Xiaoguang Liu<sup>#</sup>, Gang Wang<sup>#</sup>  
  *Bioinformatics*, 2024  
- [PMFFRC: a large-scale genomic short reads compression optimizer via memory modeling and redundant clustering](https://link.springer.com/article/10.1186/s12859-023-05566-9)  
  Hui Sun, Yingfeng Zheng, Haonan Xie, **Huidong Ma**, Xiaoguang Liu<sup>#</sup>, Gang Wang<sup>#</sup>  
  *BMC Bioinformatics*, 2023  

### Selected Under Submission
- Learned Image Compression via Sparse Attention and Adaptive Frequency  
  **Huidong Ma**, Xinyan Shi, Sun Hui, Xiaofei Yue, xiaoguang Liu<sup>#</sup>, Gang Wang<sup>#</sup>, Wentong Cai  
  *IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)*, 2026  
- Efficient Learned Data Compression via Dual-Stream Feature Decoupling  
  **Huidong Ma**, Xinyan Shi, Sun Hui, Xiaofei Yue, xiaoguang Liu<sup>#</sup>, Gang Wang<sup>#</sup>, Wentong Cai  
  *Annual Meeting of the Association for Computational Linguistics (ACL)*, 2026  

---

# :triangular_flag_on_post: Professional Activities
### Reviewer for Journals
- IEEE Transactions on Network Science and Engineering, 2025
- Information Sciences, 2026

### Reviewer for Conferences
- The ACM Web Conference (WWW), 2025
- International Conference on Acoustics, Speech, and Signal Processing (ICASSP), 2025  
