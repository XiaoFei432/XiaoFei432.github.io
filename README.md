# Xiaofei Yue Academic Homepage

This repository contains the source code for Xiaofei Yue's academic homepage, built with GitHub Pages and Jekyll.

The site is based on the AcadHomepage template:

- Template: https://github.com/RayeRen/acad-homepage.github.io
- Upstream influences: Minimal Mistakes and Academic Pages

## Local Preview

Install Ruby and Bundler, then run:

```bash
bundle install
bundle exec jekyll serve
```

Open http://127.0.0.1:4000 in a browser.

## Main Files

- `_config.yml`: site title, author profile, email, social links, and repository name.
- `_pages/about.md`: homepage content.
- `_data/papers.json`: publication data used by the interactive publication list.
- `images/profile.jpg`: current initials avatar placeholder.

## GitHub Pages

Push this repository to `XiaoFei432/XiaoFei432.github.io` and enable GitHub Pages for the `main` branch if it is not enabled automatically.

If the GitHub username changes, update both:

- `_config.yml` -> `repository`
- `_config.yml` -> `author.github`

Then update the `origin` remote URL accordingly.
