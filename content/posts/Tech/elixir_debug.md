---
title: "Elixir install with asdf (Linux)"
date: 2024-03-02T10:41:26+02:00
author: "Nico Fiorini"
categories: 
  - Tech 
tags: 
  - All
  - Elixir 
  - Programming 

draft: false
showToc: true
---

Lately, I've discovered Elixir, a functional programming language. Its syntax is very clean, and it's quite enjoyable to explore a new paradigm. I believe that every programmer should establish a workflow for familiarizing themselves with a new language and i recommend to install Elixir throw [asdf](https://asdf-vm.com/), a tool version manager.

---

## Installation with asdf

Assuming you have installed asdf following the official instruction:
Try

``` bash
> asfd --version

v0.13.1-0586b37
```

Now you can install Elixir and Erlang throw this tool version manager

### Installing Erlang

- The asdf-erlang github repository: https://github.com/asdf-vm/asdf-erlang

Keep in mind to have the depencies that this install require, read Before asdf install on the repository.

For not having annoying warning in VScode ElixirLS extension I recommend to set this variable to .bashrc or in the current terminal session.

``` bash
export KERL_BUILD_DOCS=yes
export KERL_INSTALL_HTMLDOCS=yes
export KERL_INSTALL_MANPAGES=yes
```

Find these to avoid warning in VSCode it took me some time that I would have liked to save.
With these 3 environment variable setted you can now install erlang:

``` bash
asdf plugin add erlang https://github.com/asdf-vm/asdf-erlang.git
```

``` bash
asdf install erlang <version>
```


I install the latest version but this is up to you.
Mine command is:

```bash
asdf install erlang latest
```

Now the latest command to make the command available on the shell: 

```bash
asdf local erlang <version>
```

### Installing Elixir

- the asdf-elixir github repository: https://github.com/asdf-vm/asdf-elixir

I recommend always to see the required depencies, in this case is necessary erlang already installed and unzip, see the repository, this is not official documentation, is a simple walk-through.

```bash
asdf install elixir <version>-otp-<version-otp>
```

The `<version-otp>` should be the version installed, if you have 26 installed replace with 26.

Mine is:

```bash
asdf install elixir 1.16.0-otp-26
```
