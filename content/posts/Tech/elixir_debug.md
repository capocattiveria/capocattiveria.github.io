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

Note that this is not official documentation; it's a simple walkthrough and check the documentation if you have time.

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

Ensure you have the dependencies required for this installation. Please read the "Before asdf install" section in the repository.

To avoid annoying warnings in the VSCode ElixirLS extension, I recommend setting this variable in either your .bashrc file or in the current terminal session.

``` bash
export KERL_BUILD_DOCS=yes
export KERL_INSTALL_HTMLDOCS=yes
export KERL_INSTALL_MANPAGES=yes
```

To avoid warnings in VSCode and streamline the process, make sure to set these three environment variables. Once configured, you can proceed with the Erlang installation smoothly.

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

I recommend always checking the required dependencies. In this case, it is necessary to have Erlang already installed and unzip. Please refer to the repository.

```bash
asdf install elixir <version>-otp-<version-otp>
```

The `<version-otp>` should be the version installed, if you have 26 installed replace with 26.

Mine is:

```bash
asdf install elixir 1.16.0-otp-26
```
