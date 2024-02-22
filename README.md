Introduction
------------

**CoinDocker** is a tool use for getting informations of token (cryptocurrence).


Obtaining CoinDocker
------------------------

Acquire Proton's source by cloning <https://github.com/metanum/CoinDocker>
and checking out the branch you desire.

You can clone the latest Proton to your system with this command:

```bash
git clone --recurse-submodules https://github.com/metanum/CoinDocker.git
```

Be sure to update submodules when switching between branches:

```bash
git checkout experimental_6.3
git submodule update --init --recursive
```

If you want to change any subcomponent, now is the time to do so. For
example, if you wish to make changes to Wine, you would apply them to the
`wine/` directory.


Building CoinDocker
---------------

## Preparing the build environment

```bash
npm install node-fetch
```
```bash
node CoinDocker.js
```

If your build system is missing dependencies, it will fail quickly with a clear
error message.
