function FindProxyForURL(url, host)
{
	if (isResolvable("internal.aczeda.es")
		//&& ((!isInNet(myIpAddress(), "192.168.8.0", "255.255.255.0") && !isInNet(myIpAddress(), "192.168.12.0", "255.255.255.0")) || isInNet(myIpAddress(), "10.10.10.0", "255.255.255.0"))
		&& (
			shExpMatch(host, "*.caixarenting.es")
			|| shExpMatch(host, "caixarenting.es")
			|| shExpMatch(host, "*.cualesmiip.com")
			|| shExpMatch(host, "cualesmiip.com")
			|| shExpMatch(host, "*.sacxrdbp02.dacfi.es")
			|| shExpMatch(host, "sacxrdbp02.dacfi.es")
			|| shExpMatch(host, "*.saprenting.caixabankequipment.com")
			|| shExpMatch(host, "saprenting.caixabankequipment.com")


		)
	){
		return "PROXY 192.168.220.112:808";
	}
	return "DIRECT";
}
